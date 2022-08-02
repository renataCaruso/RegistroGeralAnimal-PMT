package org.serratec.projetoaplicado.RegistroAnimal.service;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;

import org.serratec.projetoaplicado.RegistroAnimal.repository.AnimalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegistroGeral {

	@Autowired
    public AnimalRepository animalRepository;

    private String lastUsedDatePrefix = "";
    private int counter = 1;

    public String getRemId() {
        String datePrefixAno = new SimpleDateFormat("yyyy").format(new Date());
        String datePrefixMes = new SimpleDateFormat("MM").format(new Date());
        String rga = animalRepository.ultimoRegistro();
        if(rga == null) {
            rga = datePrefixAno + datePrefixMes + "0001";
        }
        Integer ano = LocalDate.now().getYear();
        String mes;
        String mesAtual = String.valueOf(LocalDate.now().getMonthValue());
        if (Integer.valueOf(mesAtual) < 10) {
            mes = "0" + mesAtual;
        }
        else {
            mes = mesAtual;
        }
        String counterSuffix = "0";

        if (ano == Integer.parseInt(datePrefixAno)) {
            if (mes.equals(datePrefixMes)) {
                for (Integer count = 1; count <= Integer.parseInt(rga.substring(6, 10)); count++) {
                    counter++;
                    counterSuffix = ((1000 <= counter) ? ""
                            : (100 <= counter) ? "0" 
                                    : (10 <= counter) ? "00" : "000")
                            + counter;
                }
                if (lastUsedDatePrefix.equals(datePrefixAno + datePrefixMes)) {
                    counter++;
                } else {
                    lastUsedDatePrefix = datePrefixAno + datePrefixMes;
                    counter = 1;
                }
            }
        }

        return datePrefixAno + datePrefixMes + counterSuffix;
    }
}
