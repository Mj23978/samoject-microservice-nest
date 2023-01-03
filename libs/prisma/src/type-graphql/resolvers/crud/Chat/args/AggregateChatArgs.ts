import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChatOrderByWithRelationInput } from "../../../inputs/ChatOrderByWithRelationInput";
import { ChatWhereInput } from "../../../inputs/ChatWhereInput";
import { ChatWhereUniqueInput } from "../../../inputs/ChatWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateChatArgs {
  @TypeGraphQL.Field(_type => ChatWhereInput, {
    nullable: true
  })
  where?: ChatWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ChatOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ChatOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ChatWhereUniqueInput, {
    nullable: true
  })
  cursor?: ChatWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
