import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MessageCreateInput } from "../../../inputs/MessageCreateInput";
import { MessageUpdateInput } from "../../../inputs/MessageUpdateInput";
import { MessageWhereUniqueInput } from "../../../inputs/MessageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMessageArgs {
  @TypeGraphQL.Field(_type => MessageWhereUniqueInput, {
    nullable: false
  })
  where!: MessageWhereUniqueInput;

  @TypeGraphQL.Field(_type => MessageCreateInput, {
    nullable: false
  })
  create!: MessageCreateInput;

  @TypeGraphQL.Field(_type => MessageUpdateInput, {
    nullable: false
  })
  update!: MessageUpdateInput;
}
