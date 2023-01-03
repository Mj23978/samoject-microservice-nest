import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SpaceCreateNestedOneWithoutViewInput } from "../inputs/SpaceCreateNestedOneWithoutViewInput";

@TypeGraphQL.InputType("SpaceViewCreateInput", {
  isAbstract: true
})
export class SpaceViewCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  localId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  spaceId!: string;

  @TypeGraphQL.Field(_type => SpaceCreateNestedOneWithoutViewInput, {
    nullable: true
  })
  space?: SpaceCreateNestedOneWithoutViewInput | undefined;
}
