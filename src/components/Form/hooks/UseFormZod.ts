import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
    email: z.string().email("Email inválido"),
    password: z.string()
        .min(8, "Senha de no mínimo 8 caracteres")
        .regex(/[0-9]/, "Senha deve conter pelo menos um número")
        .regex(/[^A-Za-z0-9]/, "Senha deve conter pelo menos um caractere especial")
        .regex(/[A-Z]/, "Senha deve conter pelo menos uma letra maiúscula"),
    hidden: z.string(),
});

export type FormProps = z.infer<typeof schema>;

const useFormZod = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormProps>({
        mode: "all",
        resolver: zodResolver(schema),
    });
    
    console.log(errors);

    const handleForm: SubmitHandler<FormProps> = (data) => {
        console.log(data);
    };

    return {
        register,
        handleSubmit,
        handleForm,
        errors,
    };
};

export default useFormZod;
