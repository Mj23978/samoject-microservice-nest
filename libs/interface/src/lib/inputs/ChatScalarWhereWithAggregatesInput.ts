import { Field, InputType } from "@nestjs/graphql";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@InputType("ChatScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ChatScalarWhereWithAggregatesInput {
  @Field(() => [ChatScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ChatScalarWhereWithAggregatesInput[] | undefined;

  @Field(() => [ChatScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ChatScalarWhereWithAggregatesInput[] | undefined;

  @Field(() => [ChatScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ChatScalarWhereWithAggregatesInput[] | undefined;

  @Field(() => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @Field(() => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @Field(() => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
