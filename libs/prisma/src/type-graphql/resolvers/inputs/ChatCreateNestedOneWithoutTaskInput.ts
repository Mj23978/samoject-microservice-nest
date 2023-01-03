import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ChatCreateOrConnectWithoutTaskInput } from "../inputs/ChatCreateOrConnectWithoutTaskInput";
import { ChatCreateWithoutTaskInput } from "../inputs/ChatCreateWithoutTaskInput";
import { ChatWhereUniqueInput } from "../inputs/ChatWhereUniqueInput";

@TypeGraphQL.InputType("ChatCreateNestedOneWithoutTaskInput", {
  isAbstract: true
})
export class ChatCreateNestedOneWithoutTaskInput {
  @TypeGraphQL.Field(_type => ChatCreateWithoutTaskInput, {
    nullable: true
  })
  create?: ChatCreateWithoutTaskInput | undefined;

  @TypeGraphQL.Field(_type => ChatCreateOrConnectWithoutTaskInput, {
    nullable: true
  })
  connectOrCreate?: ChatCreateOrConnectWithoutTaskInput | undefined;

  @TypeGraphQL.Field(_type => ChatWhereUniqueInput, {
    nullable: true
  })
  connect?: ChatWhereUniqueInput | undefined;
}
