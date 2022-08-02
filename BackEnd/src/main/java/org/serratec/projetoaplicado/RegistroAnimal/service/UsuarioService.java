package org.serratec.projetoaplicado.RegistroAnimal.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.mail.MessagingException;

import org.serratec.projetoaplicado.RegistroAnimal.DTO.EnderecoMostrarDTO;
import org.serratec.projetoaplicado.RegistroAnimal.DTO.UsuarioDTO;
import org.serratec.projetoaplicado.RegistroAnimal.DTO.UsuarioMostrarDTO;
import org.serratec.projetoaplicado.RegistroAnimal.exception.UsuarioException;
import org.serratec.projetoaplicado.RegistroAnimal.model.Endereco;
import org.serratec.projetoaplicado.RegistroAnimal.model.Usuario;
import org.serratec.projetoaplicado.RegistroAnimal.repository.EnderecoRepository;
import org.serratec.projetoaplicado.RegistroAnimal.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {

		
	@Autowired
	private EmailService sendEmailService;

	@Autowired
	UsuarioRepository usuarioRepository;

	@Autowired
	EnderecoRepository enderecoRepository;

	@Autowired
	private ImagemService imagemService;

	public UsuarioMostrarDTO transformarModelEmDTO(Usuario usuario, UsuarioMostrarDTO usuarioMostrarDTO) {

		usuarioMostrarDTO.setIdUsuario(usuario.getIdUsuario());
		usuarioMostrarDTO.setNomeCompleto(usuario.getNomeCompleto());
		usuarioMostrarDTO.setDataNasc(usuario.getDataNasc());
		usuarioMostrarDTO.setCpf(usuario.getCpf());
		usuarioMostrarDTO.setTelefone(usuario.getTelefone());
		usuarioMostrarDTO.setCelular(usuario.getCelular());
		usuarioMostrarDTO.setWhatsapp(usuario.getWhatsapp());
		usuarioMostrarDTO.setEmail(usuario.getEmail());
		usuarioMostrarDTO.setNis(usuario.getNis());
		usuarioMostrarDTO.setEnderecoMostrarDTO(toEnderecoDTO(usuario.getEndereco()));
		usuarioMostrarDTO.setFotoUsuario(imagemService.encodeImage(usuario.getFotoUsuario()));
		usuarioMostrarDTO.setComprovanteResidencia(imagemService.encodeImage(usuario.getComprovanteResidencia()));
		return usuarioMostrarDTO;

	}

	public Usuario transformarDTOEmModel(Usuario usuario, UsuarioDTO usuarioDTO) {

		usuario.setNomeCompleto(usuarioDTO.getNomeCompleto());
		usuario.setDataNasc(usuarioDTO.getDataNasc());
		usuario.setCpf(usuarioDTO.getCpf());
		usuario.setTelefone(usuarioDTO.getTelefone());
		usuario.setCelular(usuarioDTO.getCelular());
		usuario.setWhatsapp(usuarioDTO.getWhatsapp());
		usuario.setEmail(usuarioDTO.getEmail());
		usuario.setSenha(usuarioDTO.getSenha());
		usuario.setNis(usuarioDTO.getNis());
		usuario.setComprovanteResidencia(imagemService.decodeImage(usuarioDTO.getComprovanteResidencia()));
		usuario.setFotoUsuario(imagemService.decodeImage(usuarioDTO.getFotoUsuario()));
		usuario.setEndereco(usuarioDTO.getEnderecoDTO().toEndereco());

		return usuario;
	}

	public EnderecoMostrarDTO toEnderecoDTO(Endereco endereco) {
		EnderecoMostrarDTO enderecoMostrarDTO = new EnderecoMostrarDTO();
		enderecoMostrarDTO.setCep(endereco.getCep());
		enderecoMostrarDTO.setComplemento(endereco.getComplemento());
		enderecoMostrarDTO.setNumero(endereco.getNumero());
		enderecoMostrarDTO.setBairro(endereco.getBairro());
		enderecoMostrarDTO.setCidade(endereco.getCidade());
		enderecoMostrarDTO.setRua(endereco.getRua());
		enderecoMostrarDTO.setIdEndereco(endereco.getIdEndereco());
		enderecoMostrarDTO.setEstado(endereco.getEstado().toString());
		return enderecoMostrarDTO;
	}
	
	//	public String salvar(UsuarioDTO usuarioDTO) throws IOException {
//		Usuario usuario = new Usuario();
//		usuario = transformarDTOEmModel(usuario, usuarioDTO);
//		enderecoRepository.save(usuario.getEndereco());
//		usuarioRepository.save(usuario);
//		return "O id do Usuário criado é: " + usuario.getIdUsuario();
//
//	}

    public String salvar(UsuarioDTO usuarioDTO) throws IOException, MessagingException {
        Usuario usuario = new Usuario();
        usuario = transformarDTOEmModel(usuario, usuarioDTO);
        enderecoRepository.save(usuario.getEndereco());
        usuarioRepository.save(usuario);
        this.validUserData(usuario);

        var novoUsuario = new Usuario(usuario.getEmail(), usuario.getSenha());

        this.sendEmailService.sendMessage(usuario.getEmail(), EmailService.createTitle(usuario),
                EmailService.messageToNewUser(usuario));
        return "O id do Usuário criado é: " + novoUsuario.getIdUsuario();

    }
    public void validUserData(Usuario usuario) {
        if (usuario.getEmail() == null || usuario.getSenha() == null) {
            throw new RuntimeException("erro");
        }
	}

	public UsuarioMostrarDTO buscarPorId(Integer idUsuario) throws UsuarioException {
		Optional<Usuario> usuario = usuarioRepository.findById(idUsuario);
		Usuario usuarioPorId = new Usuario();
		UsuarioMostrarDTO usuarioMostrarDTO = new UsuarioMostrarDTO();
		if (usuario.isPresent()) {
			usuarioPorId = usuario.get();
			usuarioMostrarDTO = transformarModelEmDTO(usuarioPorId, usuarioMostrarDTO);
			return usuarioMostrarDTO;
		}
		throw new UsuarioException("Usuário com o id informado não encontrado");
	}

	public UsuarioMostrarDTO buscarPorEmail(String email) throws UsuarioException {
		Optional<Usuario> usuario = usuarioRepository.findByEmail(email);
		Usuario usuarioPorEmail = new Usuario();
		UsuarioMostrarDTO usuarioMostrarDTO = new UsuarioMostrarDTO();
		if (usuario.isPresent()) {
			usuarioPorEmail = usuario.get();
			usuarioMostrarDTO = transformarModelEmDTO(usuarioPorEmail, usuarioMostrarDTO);
			return usuarioMostrarDTO;
		}
		throw new UsuarioException("Email informado não encontrado");
	}

	public void deletar(Integer idUsuario) {
		usuarioRepository.deleteById(idUsuario);
	}

	public String atualizar(Integer idUsuario, UsuarioDTO usuarioDTO) throws UsuarioException {
		Optional<Usuario> usuario = usuarioRepository.findById(idUsuario);
		Usuario usuarioBanco = new Usuario();
		if (usuario.isPresent()) {
			usuarioBanco = usuario.get();
			if (usuarioDTO.getNomeCompleto() != null) {
				usuarioBanco.setNomeCompleto(usuarioDTO.getNomeCompleto());
			}
			if (usuarioDTO.getDataNasc() != null) {
				usuarioBanco.setDataNasc(usuarioDTO.getDataNasc());
			}
			if (usuarioDTO.getCpf() != null) {
				usuarioBanco.setCpf(usuarioDTO.getCpf());
			}
			if (usuarioDTO.getTelefone() != null) {
				usuarioBanco.setTelefone(usuarioDTO.getTelefone());
			}
			if (usuarioDTO.getCelular() != null) {
				usuarioBanco.setCelular(usuarioDTO.getCelular());
			}
			if (usuarioDTO.getWhatsapp() != null) {
				usuarioBanco.setWhatsapp(usuarioDTO.getWhatsapp());
			}

			if (usuarioDTO.getSenha() != null) {
				usuarioBanco.setSenha(usuarioDTO.getSenha());
			}
			if (usuarioDTO.getNis() != null) {
				usuarioBanco.setNis(usuarioDTO.getNis());
			}
			if (usuarioDTO.getEnderecoDTO() != null) {
				usuarioBanco.setEndereco(usuarioDTO.getEnderecoDTO().toEndereco());
			}
			usuarioRepository.save(usuarioBanco);
			return "O usuário com o id " + usuarioBanco.getIdUsuario() + " foi atualizado!";
		}
		throw new UsuarioException("O usuário NÃO foi atualizado!");
	}

	public List<UsuarioMostrarDTO> buscarTodos() {
		List<Usuario> listaUsuarioModel = usuarioRepository.findAll();
		List<UsuarioMostrarDTO> listaUsuarioMostrarDTO = new ArrayList<>();

		for (Usuario usuario : listaUsuarioModel) {
			UsuarioMostrarDTO usuarioMostrarDTO = new UsuarioMostrarDTO();
			usuarioMostrarDTO = transformarModelEmDTO(usuario, usuarioMostrarDTO);
			listaUsuarioMostrarDTO.add(usuarioMostrarDTO);
		}
		return listaUsuarioMostrarDTO;
	}

	public String buscarFotoPorUsuario(Integer idUsuario) {
		Usuario usuario = usuarioRepository.findById(idUsuario).get();
		return imagemService.encodeImage(usuario.getFotoUsuario());
	}

	public String buscarComprovantePorUsuario(Integer idUsuario) {
		Usuario usuario = usuarioRepository.findById(idUsuario).get();
		return imagemService.encodeImage(usuario.getComprovanteResidencia());
	}

	public void salvarListaUsuario(List<UsuarioDTO> listaUsuarioDTO) {

		for (UsuarioDTO usuarioDTO : listaUsuarioDTO) {
			Usuario usuario = new Usuario();
			usuario = transformarDTOEmModel(usuario, usuarioDTO);
			usuarioRepository.save(usuario);
		}

	}

}