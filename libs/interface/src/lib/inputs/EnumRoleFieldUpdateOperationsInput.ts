import { Field, InputType } from "@nestjs/graphql";
import { Role } from "../enums/Role";

@InputType("EnumRoleFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumRoleFieldUpdateOperationsInput {
  @Field(() => Role, {
    nullable: true
  })
  set?: "ADMIN" | "USER" | undefined;
}
