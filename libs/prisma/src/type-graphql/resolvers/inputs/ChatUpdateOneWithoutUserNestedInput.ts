import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ChatCreateOrConnectWithoutUserInput } from "../inputs/ChatCreateOrConnectWithoutUserInput";
import { ChatCreateWithoutUserInput } from "../inputs/ChatCreateWithoutUserInput";
import { ChatUpdateWithoutUserInput } from "../inputs/ChatUpdateWithoutUserInput";
import { ChatUpsertWithoutUserInput } from "../inputs/ChatUpsertWithoutUserInput";
import { ChatWhereUniqueInput } from "../inputs/ChatWhereUniqueInput";

@TypeGraphQL.InputType("ChatUpdateOneWithoutUserNestedInput", {
  isAbstract: true
})
export class ChatUpdateOneWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => ChatCreateWithoutUserInput, {
    nullable: true
  })
  create?: ChatCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ChatCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: ChatCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ChatUpsertWithoutUserInput, {
    nullable: true
  })
  upsert?: ChatUpsertWithoutUserInput | undefined;

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

  @TypeGraphQL.Field(_type => ChatUpdateWithoutUserInput, {
    nullable: true
  })
  update?: ChatUpdateWithoutUserInput | undefined;
}
