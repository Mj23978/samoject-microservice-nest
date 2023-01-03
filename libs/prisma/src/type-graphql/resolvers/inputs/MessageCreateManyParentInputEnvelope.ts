import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateManyParentInput } from "../inputs/MessageCreateManyParentInput";

@TypeGraphQL.InputType("MessageCreateManyParentInputEnvelope", {
  isAbstract: true
})
export class MessageCreateManyParentInputEnvelope {
  @TypeGraphQL.Field(_type => [MessageCreateManyParentInput], {
    nullable: false
  })
  data!: MessageCreateManyParentInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
