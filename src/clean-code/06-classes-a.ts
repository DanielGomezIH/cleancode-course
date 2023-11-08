(() => {
  //No aplicando el principio de responsabilidad única

  type Gender = 'M' | 'F';

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  class User extends Person {
    public lastAccess: Date;

    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(name, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCredential() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(email, role, name, gender, birthdate);
    }
  }

  const newUser = new UserSettings(
    '/usr/home',
    '/home',
    'fernandoherrera@gmail.com',
    'admin',
    'Fernando',
    'M',
    new Date('1985-10-21')
  );

  console.log({ newUser });
})();
