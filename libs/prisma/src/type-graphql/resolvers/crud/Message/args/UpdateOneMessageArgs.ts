import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MessageUpdateInput } from "../../../inputs/MessageUpdateInput";
import { MessageWhereUniqueInput } from "../../../inputs/MessageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMessageArgs {
  @TypeGraphQL.Field(_type => MessageUpdateInput, {
    nullable: false
  })
  data!: MessageUpdateInput;

  @TypeGraphQL.Field(_type => MessageWhereUniqueInput, {
    nullable: false
  })
  where!: MessageWhereUniqueInput;
}
