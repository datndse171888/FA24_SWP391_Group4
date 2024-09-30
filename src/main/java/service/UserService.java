package service;
import dto.UserDTO;
import entity.User;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    void save(UserDTO userDTO);
    Boolean checkPasswordUser(String email,String password);
    Boolean checkUserbyEmail(String email);
    User getUserbyEmail(String email);
}
