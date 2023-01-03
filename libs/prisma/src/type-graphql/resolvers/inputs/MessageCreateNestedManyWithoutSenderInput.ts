import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateManySenderInputEnvelope } from "../inputs/MessageCreateManySenderInputEnvelope";
import { MessageCreateOrConnectWithoutSenderInput } from "../inputs/MessageCreateOrConnectWithoutSenderInput";
import { MessageCreateWithoutSenderInput } from "../inputs/MessageCreateWithoutSenderInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageCreateNestedManyWithoutSenderInput", {
  isAbstract: true
})
export class MessageCreateNestedManyWithoutSenderInput {
  @TypeGraphQL.Field(_type => [MessageCreateWithoutSenderInput], {
    nullable: true
  })
  create?: MessageCreateWithoutSenderInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageCreateOrConnectWithoutSenderInput], {
    nullable: true
  })
  connectOrCreate?: MessageCreateOrConnectWithoutSenderInput[] | undefined;

  @TypeGraphQL.Field(_type => MessageCreateManySenderInputEnvelope, {
    nullable: true
  })
  createMany?: MessageCreateManySenderInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MessageWhereUniqueInput], {
    nullable: true
  })
  connect?: MessageWhereUniqueInput[] | undefined;
}
