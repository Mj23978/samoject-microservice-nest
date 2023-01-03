import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { MessageOrderByRelationAggregateInput } from "../inputs/MessageOrderByRelationAggregateInput";
import { ProjectOrderByWithRelationInput } from "../inputs/ProjectOrderByWithRelationInput";
import { SpaceOrderByWithRelationInput } from "../inputs/SpaceOrderByWithRelationInput";
import { TaskOrderByWithRelationInput } from "../inputs/TaskOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ChatOrderByWithRelationInput", {
  isAbstract: true
})
export class ChatOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MessageOrderByRelationAggregateInput, {
    nullable: true
  })
  messages?: MessageOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProjectOrderByWithRelationInput, {
    nullable: true
  })
  Project?: ProjectOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SpaceOrderByWithRelationInput, {
    nullable: true
  })
  Space?: SpaceOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => TaskOrderByWithRelationInput, {
    nullable: true
  })
  Task?: TaskOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => UserOrderByWithRelationInput, {
    nullable: true
  })
  User?: UserOrderByWithRelationInput | undefined;
}
