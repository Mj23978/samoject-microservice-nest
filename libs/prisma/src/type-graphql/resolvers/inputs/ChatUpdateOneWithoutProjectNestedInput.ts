import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ChatCreateOrConnectWithoutProjectInput } from "../inputs/ChatCreateOrConnectWithoutProjectInput";
import { ChatCreateWithoutProjectInput } from "../inputs/ChatCreateWithoutProjectInput";
import { ChatUpdateWithoutProjectInput } from "../inputs/ChatUpdateWithoutProjectInput";
import { ChatUpsertWithoutProjectInput } from "../inputs/ChatUpsertWithoutProjectInput";
import { ChatWhereUniqueInput } from "../inputs/ChatWhereUniqueInput";

@TypeGraphQL.InputType("ChatUpdateOneWithoutProjectNestedInput", {
  isAbstract: true
})
export class ChatUpdateOneWithoutProjectNestedInput {
  @TypeGraphQL.Field(_type => ChatCreateWithoutProjectInput, {
    nullable: true
  })
  create?: ChatCreateWithoutProjectInput | undefined;

  @TypeGraphQL.Field(_type => ChatCreateOrConnectWithoutProjectInput, {
    nullable: true
  })
  connectOrCreate?: ChatCreateOrConnectWithoutProjectInput | undefined;

  @TypeGraphQL.Field(_type => ChatUpsertWithoutProjectInput, {
    nullable: true
  })
  upsert?: ChatUpsertWithoutProjectInput | undefined;

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

  @TypeGraphQL.Field(_type => ChatUpdateWithoutProjectInput, {
    nullable: true
  })
  update?: ChatUpdateWithoutProjectInput | undefined;
}
