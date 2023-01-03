import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChatUpdateManyMutationInput } from "../../../inputs/ChatUpdateManyMutationInput";
import { ChatWhereInput } from "../../../inputs/ChatWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyChatArgs {
  @TypeGraphQL.Field(_type => ChatUpdateManyMutationInput, {
    nullable: false
  })
  data!: ChatUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ChatWhereInput, {
    nullable: true
  })
  where?: ChatWhereInput | undefined;
}
