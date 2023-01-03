import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { MessageCountAggregate } from "../outputs/MessageCountAggregate";
import { MessageMaxAggregate } from "../outputs/MessageMaxAggregate";
import { MessageMinAggregate } from "../outputs/MessageMinAggregate";

@TypeGraphQL.ObjectType("MessageGroupBy", {
  isAbstract: true
})
export class MessageGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  contentType!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  senderId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  parentId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  chatId!: string;

  @TypeGraphQL.Field(_type => MessageCountAggregate, {
    nullable: true
  })
  _count!: MessageCountAggregate | null;

  @TypeGraphQL.Field(_type => MessageMinAggregate, {
    nullable: true
  })
  _min!: MessageMinAggregate | null;

  @TypeGraphQL.Field(_type => MessageMaxAggregate, {
    nullable: true
  })
  _max!: MessageMaxAggregate | null;
}
