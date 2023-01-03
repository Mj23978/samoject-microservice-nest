import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("AffectedRowsOutput", {
  isAbstract: true
})
export class AffectedRowsOutput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  count!: number;
}
