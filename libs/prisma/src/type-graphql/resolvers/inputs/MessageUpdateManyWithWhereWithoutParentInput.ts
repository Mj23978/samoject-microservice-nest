import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { MessageScalarWhereInput } from "../inputs/MessageScalarWhereInput";
import { MessageUpdateManyMutationInput } from "../inputs/MessageUpdateManyMutationInput";

@TypeGraphQL.InputType("MessageUpdateManyWithWhereWithoutParentInput", {
  isAbstract: true
})
export class MessageUpdateManyWithWhereWithoutParentInput {
  @TypeGraphQL.Field(_type => MessageScalarWhereInput, {
    nullable: false
  })
  where!: MessageScalarWhereInput;

  @TypeGraphQL.Field(_type => MessageUpdateManyMutationInput, {
    nullable: false
  })
  data!: MessageUpdateManyMutationInput;
}
