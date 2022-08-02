package org.serratec.projetoaplicado.RegistroAnimal.repository;
import java.util.List;
import java.util.Optional;

import org.serratec.projetoaplicado.RegistroAnimal.model.Animal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface AnimalRepository extends JpaRepository<Animal, Integer>{

	@Query(value="select a.animal_tx_rga "
			+ "from \"registro-animal\".animal a "
			+ "order by a.animal_tx_rga "
			+ "desc limit 1", nativeQuery = true)
	public String ultimoRegistro(); 
	
	@Query(value="select a.*, \r\n"
            + "u.usuario_cd_id as idUsuario, \r\n"
            + "u.usuario_tx_celular as celular,\r\n"
            + "u.usuario_tx_cpf as cpf,\r\n"
            + "u.usuario_dt_data_nasc as dataNasc,\r\n"
            + "u.usuario_tx_email as email,\r\n"
            + "u.usuario_tx_nis as nis,\r\n"
            + "u.usuario_tx_nome_completo as nomeCompleto,\r\n"
            + "u.usuario_tx_senha as senha,\r\n"
            + "u.usuario_tx_telefone as telefone,\r\n"
            + "u.usuario_tx_whatsapp as whatsapp\r\n"
            + " from \"registro-animal\".animal a \r\n"
            + " inner join \"registro-animal\".usuario u on a.usuario_cd_id = u.usuario_cd_id\r\n"
            + " where a.animal_tx_rga = :rga", nativeQuery = true)
    public Optional<Animal> buscarPorRga(String rga);

    @Query(value="SELECT\n"
            + "a.*\n"
            + "FROM\n"
            + "\"registro-animal\".animal a\n"
            + "WHERE\n"
            + "a.usuario_cd_id = :idUsuario", nativeQuery = true)
    public List<Animal> buscarAnimaisPorIdUsuario(Integer idUsuario);
	
}