interface UserBase {
  firstName: string;
  lastName: string;
  position: string;
}
interface User extends UserBase {
  projects?: Array<Project>;
}
interface UserFormSchema extends UserBase { }
interface Team {
  name: string;
  users: Array<User>
}
interface Project {
  name: string;
  teamLeader: User;
}