-- CreateEnum
CREATE TYPE "public"."Cargo" AS ENUM ('DIRETOR', 'SECRETARIO', 'MEDICO');

-- CreateTable
CREATE TABLE "public"."usuarios" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT,
    "cpf" TEXT NOT NULL,
    "telefone" TEXT,
    "cargo" "public"."Cargo" NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "genero" TEXT,
    "hospital_id" TEXT,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."hospitais" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "hospitais_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."medicos" (
    "id" TEXT NOT NULL,
    "crm" TEXT NOT NULL,
    "usuario_id" TEXT NOT NULL,
    "valor_consulta" DOUBLE PRECISION DEFAULT 0.0,
    "duracao_consulta" INTEGER DEFAULT 30,
    "especialidade_id" TEXT,

    CONSTRAINT "medicos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."secretarios" (
    "id" TEXT NOT NULL,
    "usuario_id" TEXT NOT NULL,

    CONSTRAINT "secretarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."diretores" (
    "id" TEXT NOT NULL,
    "usuario_id" TEXT NOT NULL,

    CONSTRAINT "diretores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."pacientes" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "telefone" TEXT,
    "genero" TEXT,
    "cadastrado_por_secretario_id" TEXT,
    "data_nascimento" TIMESTAMP(3),
    "data_cadastro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pacientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."especialidades" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "especialidades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."relatorios" (
    "id" TEXT NOT NULL,
    "conteudo" TEXT NOT NULL,
    "medico_id" TEXT NOT NULL,
    "paciente_id" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "relatorios_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "public"."usuarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_cpf_key" ON "public"."usuarios"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "hospitais_cnpj_key" ON "public"."hospitais"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "medicos_crm_key" ON "public"."medicos"("crm");

-- CreateIndex
CREATE UNIQUE INDEX "medicos_usuario_id_key" ON "public"."medicos"("usuario_id");

-- CreateIndex
CREATE UNIQUE INDEX "secretarios_usuario_id_key" ON "public"."secretarios"("usuario_id");

-- CreateIndex
CREATE UNIQUE INDEX "diretores_usuario_id_key" ON "public"."diretores"("usuario_id");

-- CreateIndex
CREATE UNIQUE INDEX "pacientes_email_key" ON "public"."pacientes"("email");

-- CreateIndex
CREATE UNIQUE INDEX "pacientes_cpf_key" ON "public"."pacientes"("cpf");

-- AddForeignKey
ALTER TABLE "public"."usuarios" ADD CONSTRAINT "usuarios_hospital_id_fkey" FOREIGN KEY ("hospital_id") REFERENCES "public"."hospitais"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."medicos" ADD CONSTRAINT "medicos_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "public"."usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."medicos" ADD CONSTRAINT "medicos_especialidade_id_fkey" FOREIGN KEY ("especialidade_id") REFERENCES "public"."especialidades"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."secretarios" ADD CONSTRAINT "secretarios_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "public"."usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."diretores" ADD CONSTRAINT "diretores_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "public"."usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."pacientes" ADD CONSTRAINT "pacientes_cadastrado_por_secretario_id_fkey" FOREIGN KEY ("cadastrado_por_secretario_id") REFERENCES "public"."secretarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."relatorios" ADD CONSTRAINT "relatorios_medico_id_fkey" FOREIGN KEY ("medico_id") REFERENCES "public"."medicos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."relatorios" ADD CONSTRAINT "relatorios_paciente_id_fkey" FOREIGN KEY ("paciente_id") REFERENCES "public"."pacientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
