package redis.Springsession;

import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

	@RequestMapping("/api/users")
	public String authorized() {
		return "Hello Secured World";
	}

	@RequestMapping("/api/test")
	public String test() {
		return "test is done.";
	}

	@RequestMapping(value = "/api/logout", method = RequestMethod.GET)
	public void logout(HttpSession session) {
		session.invalidate();
	}
}
