import bcrypt from 'bcrypt';

export async function handleHashPin(pin:string){
    const hashedPin = await bcrypt.hash(pin, 10)
    if(hashedPin){
      return hashedPin;
    }

    else{
      throw new Error("Couldn't Create Hash For Pin")
    }
}