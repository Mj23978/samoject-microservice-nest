import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MessageCreateManyInput } from "../../../inputs/MessageCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMessageArgs {
  @TypeGraphQL.Field(_type => [MessageCreateManyInput], {
    nullable: false
  })
  data!: MessageCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
