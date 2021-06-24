using Microsoft.EntityFrameworkCore.Migrations;

namespace QuickBuy.Repositorio.Migrations
{
    public partial class AlterarTamanhoCampoPrecoProduto : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Pedido_FormasPagamento_FormaPagamentoId",
                table: "Pedido");

            migrationBuilder.DropPrimaryKey(
                name: "PK_FormasPagamento",
                table: "FormasPagamento");

            migrationBuilder.RenameTable(
                name: "FormasPagamento",
                newName: "FormaPagamento");

            migrationBuilder.AlterColumn<decimal>(
                name: "Preco",
                table: "Produto",
                type: "decimal(19,4)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(65,30)");

            migrationBuilder.AlterColumn<string>(
                name: "Descricao",
                table: "Produto",
                type: "varchar(400)",
                maxLength: 400,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(50)",
                oldMaxLength: 50)
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddPrimaryKey(
                name: "PK_FormaPagamento",
                table: "FormaPagamento",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Pedido_FormaPagamento_FormaPagamentoId",
                table: "Pedido",
                column: "FormaPagamentoId",
                principalTable: "FormaPagamento",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Pedido_FormaPagamento_FormaPagamentoId",
                table: "Pedido");

            migrationBuilder.DropPrimaryKey(
                name: "PK_FormaPagamento",
                table: "FormaPagamento");

            migrationBuilder.RenameTable(
                name: "FormaPagamento",
                newName: "FormasPagamento");

            migrationBuilder.AlterColumn<decimal>(
                name: "Preco",
                table: "Produto",
                type: "decimal(65,30)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(19,4)");

            migrationBuilder.AlterColumn<string>(
                name: "Descricao",
                table: "Produto",
                type: "varchar(50)",
                maxLength: 50,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(400)",
                oldMaxLength: 400)
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddPrimaryKey(
                name: "PK_FormasPagamento",
                table: "FormasPagamento",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Pedido_FormasPagamento_FormaPagamentoId",
                table: "Pedido",
                column: "FormaPagamentoId",
                principalTable: "FormasPagamento",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
