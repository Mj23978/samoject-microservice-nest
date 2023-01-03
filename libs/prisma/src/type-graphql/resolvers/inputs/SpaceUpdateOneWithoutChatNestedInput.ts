import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SpaceCreateOrConnectWithoutChatInput } from "../inputs/SpaceCreateOrConnectWithoutChatInput";
import { SpaceCreateWithoutChatInput } from "../inputs/SpaceCreateWithoutChatInput";
import { SpaceUpdateWithoutChatInput } from "../inputs/SpaceUpdateWithoutChatInput";
import { SpaceUpsertWithoutChatInput } from "../inputs/SpaceUpsertWithoutChatInput";
import { SpaceWhereUniqueInput } from "../inputs/SpaceWhereUniqueInput";

@TypeGraphQL.InputType("SpaceUpdateOneWithoutChatNestedInput", {
  isAbstract: true
})
export class SpaceUpdateOneWithoutChatNestedInput {
  @TypeGraphQL.Field(_type => SpaceCreateWithoutChatInput, {
    nullable: true
  })
  create?: SpaceCreateWithoutChatInput | undefined;

  @TypeGraphQL.Field(_type => SpaceCreateOrConnectWithoutChatInput, {
    nullable: true
  })
  connectOrCreate?: SpaceCreateOrConnectWithoutChatInput | undefined;

  @TypeGraphQL.Field(_type => SpaceUpsertWithoutChatInput, {
    nullable: true
  })
  upsert?: SpaceUpsertWithoutChatInput | undefined;

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

  @TypeGraphQL.Field(_type => SpaceUpdateWithoutChatInput, {
    nullable: true
  })
  update?: SpaceUpdateWithoutChatInput | undefined;
}
