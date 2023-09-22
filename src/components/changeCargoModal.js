import { useForm } from "react-hook-form";
import * as y from "yup";
import { api } from "../server/api/apiRoot";
import { yupResolver } from "@hookform/resolvers/yup";
import { CgClose } from "react-icons/cg";
import { TextInput } from "./textInput";
const formSchema = y.object({
  cargo: y.string().required("Campo obrigatório"),
});

export function ChangeCargoModal({ setIsModalOpen, userId }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (fields) => {
    const users = api.user.getAllUsers();
    const user = users.find((user) => user.id === userId);
    user.cargo = fields.cargo;

    localStorage.setItem("users", JSON.stringify(users));

    return setIsModalOpen(false);
  };

  return (
    <main className="fixed top-0 flex h-screen w-screen items-center justify-center bg-black/20 transition-colors">
      <div className="flex  w-[28rem] flex-col rounded-md border bg-gray-50 p-6">
        <div className="flex items-center justify-between">
          <p className="text-2xl font-semibold">Alterar Cargo</p>
          <div
            className="transiton-colors cursor-pointer rounded-full p-3 text-gray-800 duration-100 hover:bg-gray-200"
            onClick={() => setIsModalOpen(false)}
          >
            <CgClose size={20} />
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 flex h-full flex-col gap-3"
        >
          <TextInput
            error={errors?.title}
            register={{ ...register("cargo") }}
            title="Qual é a sua função?"
          />

          <button
            className="ml-auto mt-auto h-9 w-fit rounded-md bg-green-500 px-8 font-medium text-white transition-colors duration-100 hover:bg-green-500/90"
            type="submit"
          >
            Alterar
          </button>
        </form>
      </div>
    </main>
  );
}
