import { Field, InputType } from "@nestjs/graphql";
import { Role } from "../enums/Role";
import { NestedEnumRoleFilter } from "../inputs/NestedEnumRoleFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";

@InputType("NestedEnumRoleWithAggregatesFilter", {
  isAbstract: true
})
export class NestedEnumRoleWithAggregatesFilter {
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

  @Field(() => NestedEnumRoleWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumRoleWithAggregatesFilter | undefined;

  @Field(() => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @Field(() => NestedEnumRoleFilter, {
    nullable: true
  })
  _min?: NestedEnumRoleFilter | undefined;

  @Field(() => NestedEnumRoleFilter, {
    nullable: true
  })
  _max?: NestedEnumRoleFilter | undefined;
}
