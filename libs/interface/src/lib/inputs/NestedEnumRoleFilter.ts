import { Field, InputType } from "@nestjs/graphql";
import { Role } from "../enums/Role";

@InputType("NestedEnumRoleFilter", {
  isAbstract: true
})
export class NestedEnumRoleFilter {
  @Field(() => Role, {
    nullable: true
  })
  equals?: "ADMIN" | "USER" | undefined;

  @Field(() => [Role], {
    nullable: true
  })
  in?: Array<"ADMIN" | "USER"> | undefined;

  @Field(() => [Role], {
    nullable: true
  })
  notIn?: Array<"ADMIN" | "USER"> | undefined;

  @Field(() => NestedEnumRoleFilter, {
    nullable: true
  })
  not?: NestedEnumRoleFilter | undefined;
}
