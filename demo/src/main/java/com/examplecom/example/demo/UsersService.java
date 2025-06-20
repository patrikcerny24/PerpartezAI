package com.examplecom.example.demo;

@Service
public class UsersService {

    @Autowired
    private UsersInterface usersInterface;

    public List<Users> getAllUsers(){
        return UsersInterface.findAll();
    }

    public Users getUsersById(Long id){
        return.UsersInterface.findById(id).orElse(null);
    }

    public Users createUser (User user){
        return return.UsersInterface.save(user);
    }

    public Users updateUser (Long id, Book book){
        User existingUser = UsersInterface.findById(id).orElse(null);
        if (existingUser != null){
            existingUser.setName(user.getName());
            existingUser.setSurname(user.getSurname());
            existingUser.setUsername(user.getUsername());
            existingUser.setPassword(user.getPassword());
            existingUser.setEmail(user.getEmail());
            existingUser.setYearOfBirth(user.getYearOfBirth());
            return UsersInterface.save(existingUser);
        } else {
            return null;
        }
    }

    public void deleteUser(Long id){
        UsersInterface.deleteById(id);
    }

}
