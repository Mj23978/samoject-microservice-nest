import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateManyParentInputEnvelope } from "../inputs/MessageCreateManyParentInputEnvelope";
import { MessageCreateOrConnectWithoutParentInput } from "../inputs/MessageCreateOrConnectWithoutParentInput";
import { MessageCreateWithoutParentInput } from "../inputs/MessageCreateWithoutParentInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageCreateNestedManyWithoutParentInput", {
  isAbstract: true
})
export class MessageCreateNestedManyWithoutParentInput {
  @TypeGraphQL.Field(_type => [MessageCreateWithoutParentInput], {
    nullable: true
  })
  create?: MessageCreateWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageCreateOrConnectWithoutParentInput], {
    nullable: true
  })
  connectOrCreate?: MessageCreateOrConnectWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => MessageCreateManyParentInputEnvelope, {
    nullable: true
  })
  createMany?: MessageCreateManyParentInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MessageWhereUniqueInput], {
    nullable: true
  })
  connect?: MessageWhereUniqueInput[] | undefined;
}
