import { hash, compare } from "bcryptjs";

const encrypt = async (pass: string) => {
  const passHash = await hash(pass, 8);
  return passHash;
};

const verify = async (pass: string, passHash: string) => {
  const isCorrect = await compare(pass, passHash);
  return isCorrect;
};

export { encrypt, verify };
