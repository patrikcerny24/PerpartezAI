@RestController
@RequestMapping("/user")
public class BookController {
  
    @Autowired
    private UsersService usersService;
    
    @GetMapping("")
    public List<Users> getAllUsers() {
        return usersService.getAllUsers();
    }
    
    @GetMapping("/{id}")
    public Users getUserById(@PathVariable Long id) {
        return usersService.getUserById(id);
    }
    
    @PostMapping("")
    public Users createUser(@RequestBody User user) {
        return userService.createUser(User);
    }
    
    @PutMapping("/{id}")
    public Users updateUser(@PathVariable Long id, @RequestBody User user) {
        return usersService.updateUser(id, user);
    }
    
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        usersService.deleteUser(id);
    }
}
