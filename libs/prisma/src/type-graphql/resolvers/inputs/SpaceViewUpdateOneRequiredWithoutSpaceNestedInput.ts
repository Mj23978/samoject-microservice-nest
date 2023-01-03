import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SpaceViewCreateOrConnectWithoutSpaceInput } from "../inputs/SpaceViewCreateOrConnectWithoutSpaceInput";
import { SpaceViewCreateWithoutSpaceInput } from "../inputs/SpaceViewCreateWithoutSpaceInput";
import { SpaceViewUpdateWithoutSpaceInput } from "../inputs/SpaceViewUpdateWithoutSpaceInput";
import { SpaceViewUpsertWithoutSpaceInput } from "../inputs/SpaceViewUpsertWithoutSpaceInput";
import { SpaceViewWhereUniqueInput } from "../inputs/SpaceViewWhereUniqueInput";

@TypeGraphQL.InputType("SpaceViewUpdateOneRequiredWithoutSpaceNestedInput", {
  isAbstract: true
})
export class SpaceViewUpdateOneRequiredWithoutSpaceNestedInput {
  @TypeGraphQL.Field(_type => SpaceViewCreateWithoutSpaceInput, {
    nullable: true
  })
  create?: SpaceViewCreateWithoutSpaceInput | undefined;

  @TypeGraphQL.Field(_type => SpaceViewCreateOrConnectWithoutSpaceInput, {
    nullable: true
  })
  connectOrCreate?: SpaceViewCreateOrConnectWithoutSpaceInput | undefined;

  @TypeGraphQL.Field(_type => SpaceViewUpsertWithoutSpaceInput, {
    nullable: true
  })
  upsert?: SpaceViewUpsertWithoutSpaceInput | undefined;

  @TypeGraphQL.Field(_type => SpaceViewWhereUniqueInput, {
    nullable: true
  })
  connect?: SpaceViewWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => SpaceViewUpdateWithoutSpaceInput, {
    nullable: true
  })
  update?: SpaceViewUpdateWithoutSpaceInput | undefined;
}
