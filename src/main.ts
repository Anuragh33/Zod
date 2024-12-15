import { z } from 'zod'

const UserSchema = z.object({
  username: z.string(),
  age: z.number().gt(0),
  birthday: z.date().optional(),
  isProgrammer: z.boolean(),
  hobbies: z.enum(['Reading', 'Programming', 'Gaming']),
  friends: z.array(z.string()).nonempty(),
  coords: z.tuple([z.number(), z.number(), z.number()]),
  id: z.union([z.number(), z.string()]), // z.number().or(z.string())
})

type user = z.infer<typeof UserSchema>

const user = {
  username: 'Anuragh',
  age: 25,
  birthday: new Date(),
  isProgrammer: true,
  hobbies: 'Programming',
  friends: ['Jake', 'Sam'],
  coords: [
    Number(Math.random().toFixed(4)),
    Number(Math.random().toFixed(4)),
    Number(Math.random().toFixed(4)),
  ],
  id: 'svq3', //4322,
}

const validation = UserSchema.safeParse(user)

const success = validation.success
  ? 'Yes, Validation is success'
  : 'Validation Failed'

console.log(`
  Is validation successfull : ${success} 
  \n Validated data is: ${JSON.stringify(validation.data)} 
  \n Valoidation error: ${validation.error?.message}
  `)
