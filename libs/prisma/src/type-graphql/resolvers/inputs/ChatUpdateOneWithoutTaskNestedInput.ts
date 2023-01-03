import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ChatCreateOrConnectWithoutTaskInput } from "../inputs/ChatCreateOrConnectWithoutTaskInput";
import { ChatCreateWithoutTaskInput } from "../inputs/ChatCreateWithoutTaskInput";
import { ChatUpdateWithoutTaskInput } from "../inputs/ChatUpdateWithoutTaskInput";
import { ChatUpsertWithoutTaskInput } from "../inputs/ChatUpsertWithoutTaskInput";
import { ChatWhereUniqueInput } from "../inputs/ChatWhereUniqueInput";

@TypeGraphQL.InputType("ChatUpdateOneWithoutTaskNestedInput", {
  isAbstract: true
})
export class ChatUpdateOneWithoutTaskNestedInput {
  @TypeGraphQL.Field(_type => ChatCreateWithoutTaskInput, {
    nullable: true
  })
  create?: ChatCreateWithoutTaskInput | undefined;

  @TypeGraphQL.Field(_type => ChatCreateOrConnectWithoutTaskInput, {
    nullable: true
  })
  connectOrCreate?: ChatCreateOrConnectWithoutTaskInput | undefined;

  @TypeGraphQL.Field(_type => ChatUpsertWithoutTaskInput, {
    nullable: true
  })
  upsert?: ChatUpsertWithoutTaskInput | undefined;

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

  @TypeGraphQL.Field(_type => ChatUpdateWithoutTaskInput, {
    nullable: true
  })
  update?: ChatUpdateWithoutTaskInput | undefined;
}
