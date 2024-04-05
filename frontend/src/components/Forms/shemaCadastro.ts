import {z} from "zod";

export const schemaForm = z.object({
  name: z.string({
    required_error: "nome é obrigatorio",
    invalid_type_error: "o nome deve ser valido"
  }).min(10, "requer no minimo 10 caracteres")
  .max(30, "requer no maximo 30 caracteres")
  .transform(name => {
    return name.trim().split(" ").map(word => {
      return word[0].toLocaleUpperCase().concat(word.substring(1))
    }).join(" ")
  }),

  email: z.string()
  .regex(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ , "email obrigatorio")
  .email("formato de email invalido")
  .min(1, "email é obrigatorio"),

  password: z.string({
    required_error: "senha obrigatorioa",
    invalid_type_error: "a senha deve ser valida"
  })
  .min(8, "requer no minimo 8 caracteres")
  .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial")
})