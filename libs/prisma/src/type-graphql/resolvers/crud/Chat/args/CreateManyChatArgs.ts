import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChatCreateManyInput } from "../../../inputs/ChatCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyChatArgs {
  @TypeGraphQL.Field(_type => [ChatCreateManyInput], {
    nullable: false
  })
  data!: ChatCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
