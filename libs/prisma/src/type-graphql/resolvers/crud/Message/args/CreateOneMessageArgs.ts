import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MessageCreateInput } from "../../../inputs/MessageCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMessageArgs {
  @TypeGraphQL.Field(_type => MessageCreateInput, {
    nullable: false
  })
  data!: MessageCreateInput;
}
