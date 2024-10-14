package dto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProfileDTO  implements Serializable {
    private String firstName;
    private String lastName;
    private String middleName;
    private int age;
    private LocalDate dateOfBirth;
    private String gender;
    private String address;
}
