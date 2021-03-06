# Generated by Django 3.1.4 on 2021-05-15 17:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('φ', '0160_entity_url'),
    ]

    operations = [
        migrations.CreateModel(
            name='AnomalyLiabilitiesAndShareholdersEquity',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='AnomalyShareholdersEquity',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='AnomalyShareholdersEquitySEC',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='CommonShareIssued',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='CommonShareRepurchasedAndRetired',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='LiabilitiesAndShareholdersEquity',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='PaymentsForRepurchaseOfCommonShare',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='ProceedsFromIssuanceOfCommonShare',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='ProceedsFromShareOptionExercices',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='ShareholdersEquity',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='ShareholdersEquityBeginning',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='SharePrice',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.DeleteModel(
            name='AnomalyLiabilitiesAndStockholdersEquity',
        ),
        migrations.DeleteModel(
            name='AnomalyStockholdersEquity',
        ),
        migrations.DeleteModel(
            name='AnomalyStockholdersEquitySEC',
        ),
        migrations.DeleteModel(
            name='CommonStockIssued',
        ),
        migrations.DeleteModel(
            name='CommonStockRepurchasedAndRetired',
        ),
        migrations.DeleteModel(
            name='LiabilitiesAndStockholdersEquity',
        ),
        migrations.DeleteModel(
            name='PaymentsForRepurchaseOfCommonStock',
        ),
        migrations.DeleteModel(
            name='ProceedsFromIssuanceOfCommonStock',
        ),
        migrations.DeleteModel(
            name='ProceedsFromStockOptionExercices',
        ),
        migrations.DeleteModel(
            name='StockholdersEquity',
        ),
        migrations.DeleteModel(
            name='StockholdersEquityBeginning',
        ),
        migrations.DeleteModel(
            name='StockPrice',
        ),
        migrations.RemoveField(
            model_name='auditdata',
            name='AnomalyLiabilitiesAndStockholdersEquity',
        ),
        migrations.RemoveField(
            model_name='auditdata',
            name='AnomalyStockholdersEquity',
        ),
        migrations.RemoveField(
            model_name='auditdata',
            name='AnomalyStockholdersEquitySEC',
        ),
        migrations.RemoveField(
            model_name='auditdata',
            name='LiabilitiesAndStockholdersEquity',
        ),
        migrations.RemoveField(
            model_name='auditdata',
            name='StockPrice',
        ),
        migrations.RemoveField(
            model_name='auditdata',
            name='StockPriceUpdate',
        ),
        migrations.RemoveField(
            model_name='auditdata',
            name='StockholdersEquity',
        ),
        migrations.RemoveField(
            model_name='auditdata',
            name='StockholdersEquityBeginning',
        ),
        migrations.RemoveField(
            model_name='cashflow',
            name='PaymentsForRepurchaseOfCommonStock',
        ),
        migrations.RemoveField(
            model_name='cashflow',
            name='ProceedsFromIssuanceOfCommonStock',
        ),
        migrations.RemoveField(
            model_name='cashflow',
            name='ProceedsFromStockOptionExercices',
        ),
        migrations.RemoveField(
            model_name='entity',
            name='StockPrice',
        ),
        migrations.RemoveField(
            model_name='entity',
            name='StockPriceUpdate',
        ),
        migrations.RemoveField(
            model_name='entity',
            name='urlstockholdersequityfifthlastyear',
        ),
        migrations.RemoveField(
            model_name='entity',
            name='urlstockholdersequityfourthlastyear',
        ),
        migrations.RemoveField(
            model_name='entity',
            name='urlstockholdersequitylastyear',
        ),
        migrations.RemoveField(
            model_name='entity',
            name='urlstockholdersequitysecondlastyear',
        ),
        migrations.RemoveField(
            model_name='entity',
            name='urlstockholdersequityseventhlastyear',
        ),
        migrations.RemoveField(
            model_name='entity',
            name='urlstockholdersequitysixthlastyear',
        ),
        migrations.RemoveField(
            model_name='entity',
            name='urlstockholdersequitythirdlastyear',
        ),
        migrations.RemoveField(
            model_name='trialbalance',
            name='CommonStockIssued',
        ),
        migrations.RemoveField(
            model_name='trialbalance',
            name='CommonStockRepurchasedAndRetired',
        ),
        migrations.AddField(
            model_name='auditdata',
            name='AnomalyLiabilitiesAndShareholdersEquity',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='auditdata',
            name='AnomalyShareholdersEquity',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='auditdata',
            name='AnomalyShareholdersEquitySEC',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='auditdata',
            name='LiabilitiesAndShareholdersEquity',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='auditdata',
            name='SharePrice',
            field=models.FloatField(default=0),
        ),
        migrations.AddField(
            model_name='auditdata',
            name='SharePriceUpdate',
            field=models.FloatField(default=0),
        ),
        migrations.AddField(
            model_name='auditdata',
            name='ShareholdersEquity',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='auditdata',
            name='ShareholdersEquityBeginning',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='cashflow',
            name='PaymentsForRepurchaseOfCommonShare',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='cashflow',
            name='ProceedsFromIssuanceOfCommonShare',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='cashflow',
            name='ProceedsFromShareOptionExercices',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='entity',
            name='SharePrice',
            field=models.FloatField(default=0),
        ),
        migrations.AddField(
            model_name='entity',
            name='SharePriceUpdate',
            field=models.DateTimeField(null=True),
        ),
        migrations.AddField(
            model_name='entity',
            name='urlshareholdersequityfifthlastyear',
            field=models.CharField(default='', max_length=170),
        ),
        migrations.AddField(
            model_name='entity',
            name='urlshareholdersequityfourthlastyear',
            field=models.CharField(default='', max_length=170),
        ),
        migrations.AddField(
            model_name='entity',
            name='urlshareholdersequitylastyear',
            field=models.CharField(default='', max_length=170),
        ),
        migrations.AddField(
            model_name='entity',
            name='urlshareholdersequitysecondlastyear',
            field=models.CharField(default='', max_length=170),
        ),
        migrations.AddField(
            model_name='entity',
            name='urlshareholdersequityseventhlastyear',
            field=models.CharField(default='', max_length=170),
        ),
        migrations.AddField(
            model_name='entity',
            name='urlshareholdersequitysixthlastyear',
            field=models.CharField(default='', max_length=170),
        ),
        migrations.AddField(
            model_name='entity',
            name='urlshareholdersequitythirdlastyear',
            field=models.CharField(default='', max_length=170),
        ),
        migrations.AddField(
            model_name='trialbalance',
            name='CommonShareIssued',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='trialbalance',
            name='CommonShareRepurchasedAndRetired',
            field=models.IntegerField(default=0),
        ),
    ]
