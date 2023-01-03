import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ChatCreateOrConnectWithoutSpaceInput } from "../inputs/ChatCreateOrConnectWithoutSpaceInput";
import { ChatCreateWithoutSpaceInput } from "../inputs/ChatCreateWithoutSpaceInput";
import { ChatUpdateWithoutSpaceInput } from "../inputs/ChatUpdateWithoutSpaceInput";
import { ChatUpsertWithoutSpaceInput } from "../inputs/ChatUpsertWithoutSpaceInput";
import { ChatWhereUniqueInput } from "../inputs/ChatWhereUniqueInput";

@TypeGraphQL.InputType("ChatUpdateOneWithoutSpaceNestedInput", {
  isAbstract: true
})
export class ChatUpdateOneWithoutSpaceNestedInput {
  @TypeGraphQL.Field(_type => ChatCreateWithoutSpaceInput, {
    nullable: true
  })
  create?: ChatCreateWithoutSpaceInput | undefined;

  @TypeGraphQL.Field(_type => ChatCreateOrConnectWithoutSpaceInput, {
    nullable: true
  })
  connectOrCreate?: ChatCreateOrConnectWithoutSpaceInput | undefined;

  @TypeGraphQL.Field(_type => ChatUpsertWithoutSpaceInput, {
    nullable: true
  })
  upsert?: ChatUpsertWithoutSpaceInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ChatWhereUniqueInput, {
    nullable: true
  })
  connect?: ChatWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ChatUpdateWithoutSpaceInput, {
    nullable: true
  })
  update?: ChatUpdateWithoutSpaceInput | undefined;
}
