package edu.ut.kelompokb.notaryapp.etc;

public enum PaymentMethod {

    BANK_TRANSFER("Transfer Bank"),
    CASH("Tunai"),
    CREDIT_CARD("Kartu Kredit"),
    E_WALLET("E-Wallet");

    private final String displayName;

    PaymentMethod(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }
}
