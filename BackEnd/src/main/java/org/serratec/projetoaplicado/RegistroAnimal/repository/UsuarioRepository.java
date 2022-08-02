package org.serratec.projetoaplicado.RegistroAnimal.repository;

import java.util.Optional;

import org.serratec.projetoaplicado.RegistroAnimal.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

	public Optional<Usuario> findByEmail(String email);
	
    public Optional<Usuario> findByNomeCompleto(String nomeCompleto);
//	@Query(value="FROM Usuario u WHERE u.username = ?1")
//	Optional<Usuario> buscarPorEmail(String email);

//	@Query(nativeQuery = true, value="select "
//			+ "u.usuario_cd_id as idUsuario, "
//			+ "u.usuario_tx_celular as celular, "
//			+ "u.usuario_tx_cpf as cpf,"
//			+ "u.usuario_dt_data_nasc as dataNasc,"
//			+ "u.usuario_tx_email as email,"
//			+ "u.usuario_tx_nis as nis,"
//			+ "u.usuario_tx_nome_completo as nomeCompleto,"
//			+ "u.usuario_tx_senha as senha,"
//			+ "u.usuario_tx_telefone as telefone,"
//			+ "u.usuario_tx_whatsapp as whatsapp,"
//			+ "u.id_foto_usuario as fotoUsuario,"
//			+ "u.id_comprovante_residencia as"
//			+ "comprovanteResidencia from usuario u")
//	public Usuario salvar(Usuario usuario);
}
