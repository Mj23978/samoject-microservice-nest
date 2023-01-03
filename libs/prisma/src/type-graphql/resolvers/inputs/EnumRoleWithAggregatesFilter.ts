import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumRoleFilter } from "../inputs/NestedEnumRoleFilter";
import { NestedEnumRoleWithAggregatesFilter } from "../inputs/NestedEnumRoleWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType("EnumRoleWithAggregatesFilter", {
  isAbstract: true
})
export class EnumRoleWithAggregatesFilter {
  @TypeGraphQL.Field(_type => Role, {
    nullable: true
  })
  equals?: "ADMIN" | "USER" | undefined;

  @TypeGraphQL.Field(_type => [Role], {
    nullable: true
  })
  in?: Array<"ADMIN" | "USER"> | undefined;

  @TypeGraphQL.Field(_type => [Role], {
    nullable: true
  })
  notIn?: Array<"ADMIN" | "USER"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumRoleWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumRoleWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumRoleFilter, {
    nullable: true
  })
  _min?: NestedEnumRoleFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumRoleFilter, {
    nullable: true
  })
  _max?: NestedEnumRoleFilter | undefined;
}
