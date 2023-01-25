
// generate a login function with firebase api 


export class UserMaxAggregate {

  constructor(id: string, createdAt: Date, updatedAt: Date, email: string, password: string, firstname: string, lastname: string, username: string, active: boolean, chatId: string) {
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.email = email;
    this.password = password;
    this.firstname = firstname;
    this.lastname = lastname;
    this.username = username;
    this.active = active;
    this.chatId = chatId;
    
  }

  constructor(
    id: string,
    createdAt: Date,
    updatedAt: Date,
    email: string,
    password: string,
    firstname: string,
    lastname: string,
    username: string,
    active: boolean,
    chatId: string
  ) {
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.email = email;
    this.password = password;
    this.firstname = firstname;
    this.lastname = lastname;
    this.username = username;
    this.active = active;
    this.chatId = chatId;
  }
}

export default UserMaxAggregate;