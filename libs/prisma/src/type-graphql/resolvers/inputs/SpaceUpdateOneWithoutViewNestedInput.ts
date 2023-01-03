import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SpaceCreateOrConnectWithoutViewInput } from "../inputs/SpaceCreateOrConnectWithoutViewInput";
import { SpaceCreateWithoutViewInput } from "../inputs/SpaceCreateWithoutViewInput";
import { SpaceUpdateWithoutViewInput } from "../inputs/SpaceUpdateWithoutViewInput";
import { SpaceUpsertWithoutViewInput } from "../inputs/SpaceUpsertWithoutViewInput";
import { SpaceWhereUniqueInput } from "../inputs/SpaceWhereUniqueInput";

@TypeGraphQL.InputType("SpaceUpdateOneWithoutViewNestedInput", {
  isAbstract: true
})
export class SpaceUpdateOneWithoutViewNestedInput {
  @TypeGraphQL.Field(_type => SpaceCreateWithoutViewInput, {
    nullable: true
  })
  create?: SpaceCreateWithoutViewInput | undefined;

  @TypeGraphQL.Field(_type => SpaceCreateOrConnectWithoutViewInput, {
    nullable: true
  })
  connectOrCreate?: SpaceCreateOrConnectWithoutViewInput | undefined;

  @TypeGraphQL.Field(_type => SpaceUpsertWithoutViewInput, {
    nullable: true
  })
  upsert?: SpaceUpsertWithoutViewInput | undefined;

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

  @TypeGraphQL.Field(_type => SpaceUpdateWithoutViewInput, {
    nullable: true
  })
  update?: SpaceUpdateWithoutViewInput | undefined;
}
