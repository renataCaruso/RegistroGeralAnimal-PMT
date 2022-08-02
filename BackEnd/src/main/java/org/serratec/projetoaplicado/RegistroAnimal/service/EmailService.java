package org.serratec.projetoaplicado.RegistroAnimal.service;

import java.util.Properties;

import org.serratec.projetoaplicado.RegistroAnimal.model.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.stereotype.Component;

@Component
public class EmailService {

	@Autowired
	private JavaMailSender emailSender;

	
	@Value("${spring.mail.username}")
	private String userName;
	
	@Value("${spring.mail.host}")
	private String host;
	
	@Value("${spring.mail.password}")
	private String senha;
	
	@Value("${spring.mail.email.remetente}")
	private String emailRemetente;

	//private final String emailRemetente = "timepapaleguas@gmail.com";
	
		
	public static String createTitle(Usuario usuario) {
		return
				usuario.getNomeCompleto() + " seu cadastro foi recebido!";
	}
	
	public JavaMailSender javaMailSender() {
		
		JavaMailSenderImpl enviarEmail = new JavaMailSenderImpl();
		Properties prop = new Properties();
		
		enviarEmail.setHost("smtp.gmail.com");
		enviarEmail.setPort(465);
		enviarEmail.setUsername("timepapaleguas@gmail.com");
		enviarEmail.setPassword("zauhlfbheadludzd");
		enviarEmail.setProtocol("smtp");
		enviarEmail.setDefaultEncoding("UTF-8");
		prop.put("mail.smtp.auth", true);
		prop.put("mail.smtp.ssl.enable", true);
		enviarEmail.setJavaMailProperties(prop);
		
		return enviarEmail;
	}
	
	public void sendMessage(String to, String subject, String text) {
		
		SimpleMailMessage message = new SimpleMailMessage();
		message.setFrom(emailRemetente);
		message.setTo(to);
		message.setSubject(subject);
		message.setText(text);
		emailSender.send(message);
			
	}
	
	public static String messageToNewUser(Usuario usuario) {
        return
                "Registro Geral Animal \n\n"
                +"Olá, " + usuario.getNomeCompleto()
                +"\nSua conta no Portal do Registro Geral Animal da Prefeitura Municipal de Teresópolis está quase pronta.\n"
                +"Para ativá-la, por favor confirme o seu endereço de email clicando no link abaixo.\n"
                +"http://169.57.150.59:3012/confirmacao-email \n"
                +"Se você não se cadastrou neste portal recentemente, por favor ignore este email.\n\n"
                +"Obrigado!\n"
                +"Att: Equipe Registro Geral Animal!!";

    }
	
//	public void emailTeste() throws MessagingException, EmailException {
//		
//		this.emailSender = javaMailSender();
//		MimeMessage message = emailSender.createMimeMessage();
//		MimeMessageHelper helper = new MimeMessageHelper(message, true);
//		
//		try {
//			helper.setFrom("timepapaleguas@gmail.com");
//			helper.setTo(emailRemetente);
//			
//			helper.setSubject("Confirmação de Email - Cadastro RGA");
//			
//			StringBuilder sBuilder = new StringBuilder();
//			sBuilder.append("<html>"
//                    +"<body><img src='https://st3.depositphotos.com/1594920/16972/i/450/depositphotos_169728880-stock-photo-group-of-cats-and-dogs.jpg' "
//                    +"width='300px' border='0' style='padding:22px;'>"
//                    +"<br/><h1>Registro Geral Animal</h1></div>"
//                    +"<br/><p>Olá!\r\n<br/><br/>"
//                    + "\r\n"
//                    + "Sua conta no Portal do Registro Geral Animal da Prefeitura Municipal de Teresópolis está quase pronta.<br/> Para ativá-la, por favor confirme o seu endereço de email clicando no link abaixo.<br/><br/>\r\n"
//                    + "\r\n"
//                    + "<br/><a href='http://169.57.150.59:3012//confirmacao-email' >Ativar minha conta/Confirmar meu email</a>\r\n<br/><br/>"
//                    + "\r\n"
//                    + "<br/>Sua conta não será ativada até que seu email seja confirmado.\r\n"
//                    + "\r\n"
//                    + "<br/>Se você não se cadastrou neste portal recentemente, por favor ignore este email.</p><br/>"
//                    +"</div>"
//                    +"<div>\n\r\nObrigado!"
//                    +"</div><div>\nAtt: Equipe Registro Geral Animal!! </div>"
//                    +"</body></html>'");
//			helper.setText(sBuilder.toString(), true);
//			
//			emailSender.send(message);
//			
//		}  catch (Exception e) {
//			throw new EmailException(
//					"ERRO AO ENVIAR O EMAIL " + e.getMessage());
//		}		
//	}
//
//	public static String messageToNewUser(Usuario usuario, String senha) {
//		return "<html>"
//                +"<body><img src='https://st3.depositphotos.com/1594920/16972/i/450/depositphotos_169728880-stock-photo-group-of-cats-and-dogs.jpg' "
//                +"width='300px' border='0' style='padding:22px;'>"
//                +"<br/><h1>Registro Geral Animal</h1></div>"
//                +"<br/><p>Olá! " + usuario.getNomeCompleto()
//                +"\r\n<br/><br/>"
//                + "\r\n"
//                + "Sua conta no Portal do Registro Geral Animal da Prefeitura Municipal de Teresópolis está quase pronta.<br/> Para ativá-la, por favor confirme o seu endereço de email clicando no link abaixo.<br/><br/>\r\n"
//                + "\r\n"
//                + "<br/><a href='http://169.57.150.59:3012//confirmacao-email' >Ativar minha conta/Confirmar meu email</a>\r\n<br/><br/>"
//                + "\r\n"
//                + "<br/>Sua conta não será ativada até que seu email seja confirmado.\r\n"
//                + "\r\n"
//                + "<br/>Se você não se cadastrou neste portal recentemente, por favor ignore este email.</p><br/>"
//                +"</div>"
//                +"<div>\n\r\nObrigado!"
//                +"</div><div>\nAtt: Equipe Registro Geral Animal!! </div>"
//                +"</body></html>'";
//	}
}