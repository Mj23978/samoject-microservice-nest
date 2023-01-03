import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateManyChatInput } from "../inputs/MessageCreateManyChatInput";

@TypeGraphQL.InputType("MessageCreateManyChatInputEnvelope", {
  isAbstract: true
})
export class MessageCreateManyChatInputEnvelope {
  @TypeGraphQL.Field(_type => [MessageCreateManyChatInput], {
    nullable: false
  })
  data!: MessageCreateManyChatInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
