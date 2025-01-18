"use client";

import { createLink } from "@/app/actions/create-link";
import { verifyLink } from "@/app/actions/verify-link";
import Button from "@/app/components/ui/button";
import TextInput from "@/app/components/ui/text-input";
import { sanitizeLink } from "@/app/lib/utils";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export default function CreateLinkForm() {
  const router = useRouter();
  const [link, setLink] = useState("");
  const [error, setError] = useState("");

  function handleLinkChange(e: ChangeEvent<HTMLInputElement>) {
    setLink(sanitizeLink(e.target.value));
    setError("");
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Mensagem de erro ao não digitar um link
    if (link.length === 0) return setError("Por favor crie seu link ⚠️ ");

    // Quando o usario cria um link ja existente:

    const isLinkTaken = await verifyLink(link);

    if (isLinkTaken)
      return setError(
        "OPS! 😳, Link já existente! Por favor tente um outro 👍🏽"
      );

    // Criar o perfil do usuario
    const isLinkCreated = await createLink(link);

    if (!isLinkCreated)
      return setError("Erro ao criar seu perfil. Tente novamente.");

    router.push(`/${link}`);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full flex items-center gap-2">
        <span className="text-white">projectinbio.com/</span>
        <TextInput value={link} onChange={handleLinkChange} />
        <Button className="w-[126px]">Criar</Button>
      </form>

      <div className="text-accent-pink">
        <span className="text-2xl">{error}</span>
      </div>
    </>
  );
}
