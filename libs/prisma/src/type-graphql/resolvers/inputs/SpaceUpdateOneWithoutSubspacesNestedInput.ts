import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SpaceCreateOrConnectWithoutSubspacesInput } from "../inputs/SpaceCreateOrConnectWithoutSubspacesInput";
import { SpaceCreateWithoutSubspacesInput } from "../inputs/SpaceCreateWithoutSubspacesInput";
import { SpaceUpdateWithoutSubspacesInput } from "../inputs/SpaceUpdateWithoutSubspacesInput";
import { SpaceUpsertWithoutSubspacesInput } from "../inputs/SpaceUpsertWithoutSubspacesInput";
import { SpaceWhereUniqueInput } from "../inputs/SpaceWhereUniqueInput";

@TypeGraphQL.InputType("SpaceUpdateOneWithoutSubspacesNestedInput", {
  isAbstract: true
})
export class SpaceUpdateOneWithoutSubspacesNestedInput {
  @TypeGraphQL.Field(_type => SpaceCreateWithoutSubspacesInput, {
    nullable: true
  })
  create?: SpaceCreateWithoutSubspacesInput | undefined;

  @TypeGraphQL.Field(_type => SpaceCreateOrConnectWithoutSubspacesInput, {
    nullable: true
  })
  connectOrCreate?: SpaceCreateOrConnectWithoutSubspacesInput | undefined;

  @TypeGraphQL.Field(_type => SpaceUpsertWithoutSubspacesInput, {
    nullable: true
  })
  upsert?: SpaceUpsertWithoutSubspacesInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => SpaceWhereUniqueInput, {
    nullable: true
  })
  connect?: SpaceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => SpaceUpdateWithoutSubspacesInput, {
    nullable: true
  })
  update?: SpaceUpdateWithoutSubspacesInput | undefined;
}
