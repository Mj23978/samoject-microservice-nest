import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MessageUpdateManyMutationInput } from "../../../inputs/MessageUpdateManyMutationInput";
import { MessageWhereInput } from "../../../inputs/MessageWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMessageArgs {
  @TypeGraphQL.Field(_type => MessageUpdateManyMutationInput, {
    nullable: false
  })
  data!: MessageUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MessageWhereInput, {
    nullable: true
  })
  where?: MessageWhereInput | undefined;
}
